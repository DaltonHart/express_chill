import React from "react";

class Bands extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      bands: []
    }

  }


  componentDidMount(){
    fetch("/api/v1/bands")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          bands: json.data
        })
      })
  }


  render(){
    const { bands } = this.state;

    return <div className="bands">
      <h1>All Bands</h1>
      {
        bands.length > 0 && bands.map(band => <h3>{band.name}</h3>)
      }
    </div>
  }
}

export default Bands;