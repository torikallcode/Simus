package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

func main() {
	var err error
	// Connect ke MySQL
	db, err = sql.Open("mysql", "root:@tcp(127.0.0.1:3306)/weight_data")
	if err != nil {
		log.Fatal(err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatal("Cannot connect to DB:", err)
	}
	fmt.Println("Connected to database")

	// Routing
	http.HandleFunc("/insert", insertHandler)
	http.HandleFunc("/data", dataHandler)

	fmt.Println("Server running on port 3000")
	log.Fatal(http.ListenAndServe(":3000", nil))
}

func insertHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Ambil data dari form-urlencoded
	err := r.ParseForm()
	if err != nil {
		http.Error(w, "Failed to parse form", http.StatusBadRequest)
		return
	}

	weightStr := r.FormValue("weight")
	weight, err := strconv.ParseFloat(weightStr, 64)
	if err != nil {
		http.Error(w, "Invalid weight value", http.StatusBadRequest)
		return
	}

	if weight < 0 {
		weight = 0
	}

	// Insert ke database
	stmt, err := db.Prepare("INSERT INTO weights (weight) VALUES (?)")
	if err != nil {
		http.Error(w, "Failed to prepare statement", http.StatusInternalServerError)
		return
	}
	defer stmt.Close()

	_, err = stmt.Exec(weight)
	if err != nil {
		http.Error(w, "Failed to insert data", http.StatusInternalServerError)
		return
	}

	fmt.Fprintln(w, "Data inserted")
}

func dataHandler(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT id, weight, timestamp FROM weights ORDER BY timestamp DESC")
	if err != nil {
		http.Error(w, "Failed to fetch data", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	type Weight struct {
		ID        int     `json:"id"`
		Weight    float64 `json:"weight"`
		Timestamp string  `json:"timestamp"`
	}

	var data []Weight

	for rows.Next() {
		var w Weight
		err := rows.Scan(&w.ID, &w.Weight, &w.Timestamp)
		if err != nil {
		http.Error(w http.ResponseWriter, "Failed to read data", http.StatusInternalServerError)
			return
		}
		data = append(data, w)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(data)
}
