import "./styles/CountriesContainer.css";
import Loader from "./Loader";
import React from "react";

class CountriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://restcountries.eu/rest/v2/alpha/" + this.props.countryCode,
      countryInfo: [],
      fetching: true,
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((countryInf) =>
        this.setState({
          countryInfo: countryInf,
          fetching: false,
        })
      );
  }

  componentDidUpdate(){
    fetch(this.state.url)
      .then((response) => response.json())
      .then((countryInf) =>
        this.setState({
          countryInfo: countryInf,
          fetching: false,
        })
      );
  }

  searchForBorderCountry(event) {
    this.setState({
      fetching: true,
      url: "https://restcountries.eu/rest/v2/alpha/" + event.target.value,
    });
    this.componentDidUpdate();
  }

  render() {
    if(this.props.darkMode){
      if (this.state.fetching) {
        return <Loader />;
      } else {
        let country = this.state.countryInfo;
        let currencies = country.currencies
          .map((currencie) => currencie.name)
          .join(", ");
        let languages = country.languages
          .map((language) => language.name)
          .join(", ");
        let borders = country.borders.map((border) => (
          <button
            value={border}
            className="country-border-button border-button-dark"
            onClick={this.searchForBorderCountry.bind(this)}
          >
            {border}
          </button>
        ));
        return (
          <div>
            <div className="one-country-container">
              <div className="one-country-info-container one-country-dark-container">
                <img src={country.flag} alt={country.name}></img>
                <div className="one-country-info">
                  <h2 className="info-dark">{country.name}</h2>
                  <div className="country-features">
                    <div className="info-dark">
                      <p>
                        <span>Native name: </span>
                        {country.nativeName}
                      </p>
                      <p>
                        <span>Population: </span>
                        {country.population}
                      </p>
                      <p>
                        <span>Region: </span>
                        {country.region}
                      </p>
                      <p>
                        <span>Sub Region: </span>
                        {country.subregion}
                      </p>
                      <p>
                        <span>Capital: </span>
                        {country.capital}
                      </p>
                    </div>
                    <div className="info-dark">
                      <p>
                        <span>Top Level Domain : </span>
                        {country.topLevelDomain}
                      </p>
                      <p>
                        <span>Currencies: </span>
                        {currencies}
                      </p>
                      <p>
                        <span>Languages: </span>
                        {languages}
                      </p>
                    </div>
                  </div>
                  <div className="country-borders info-dark">
                    <p>
                      <span>Border Countries: </span>
                    </p>
                    <div>{borders}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }else{
      if (this.state.fetching) {
        return <Loader />;
      } else {
        let country = this.state.countryInfo;
        let currencies = country.currencies
          .map((currencie) => currencie.name)
          .join(", ");
        let languages = country.languages
          .map((language) => language.name)
          .join(", ");
        let borders = country.borders.map((border) => (
          <button
            value={border}
            className="country-border-button"
            onClick={this.searchForBorderCountry.bind(this)}
          >
            {border}
          </button>
        ));
        return (
          <div>
            <div className="one-country-container">
              <div className="one-country-info-container">
                <img src={country.flag} alt={country.name}></img>
                <div className="one-country-info">
                  <h2>{country.name}</h2>
                  <div className="country-features">
                    <div>
                      <p>
                        <span>Native name: </span>
                        {country.nativeName}
                      </p>
                      <p>
                        <span>Population: </span>
                        {country.population}
                      </p>
                      <p>
                        <span>Region: </span>
                        {country.region}
                      </p>
                      <p>
                        <span>Sub Region: </span>
                        {country.subregion}
                      </p>
                      <p>
                        <span>Capital: </span>
                        {country.capital}
                      </p>
                    </div>
                    <div>
                      <p>
                        <span>Top Level Domain : </span>
                        {country.topLevelDomain}
                      </p>
                      <p>
                        <span>Currencies: </span>
                        {currencies}
                      </p>
                      <p>
                        <span>Languages: </span>
                        {languages}
                      </p>
                    </div>
                  </div>
                  <div className="country-borders">
                    <p>
                      <span>Border Countries: </span>
                    </p>
                    <div>{borders}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

export default CountriesContainer;
