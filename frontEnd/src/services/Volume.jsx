export const GetVolume = () => {

  fetch('http://localhost:8081/internet')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}
