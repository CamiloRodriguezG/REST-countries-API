import "./styles/MainContainer.css";
import "./styles/CountriesContainer.css";
import "./styles/CountryNotFound.css";
import Loader from "./Loader";
import CountriesContainer from "./CountriesContainer";
import React from "react";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUser: "",
      url: "https://restcountries.eu/rest/v2/all",
      countries: [],
      fetching: true,
      specifiedCountry: false,
      countryCode: "",
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((countriesInfo) =>
        this.setState({
          countries: countriesInfo,
          fetching: false,
        })
      );
  }

  componentDidUpdate() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((countriesInfo) =>
        this.setState({
          countries: countriesInfo,
          fetching: false,
        })
      );
  }

  searchCountryByName() {
    this.setState({
      url: `https://restcountries.eu/rest/v2/name/${this.state.inputUser}`,
      fetching: true,
    });
    this.componentDidUpdate();
  }

  searchCountryByRegion() {
    this.setState({
      url: `https://restcountries.eu/rest/v2/region/${
        document.getElementById("search-region-field").value
      }`,
      fetching: true,
    });
    this.componentDidUpdate();
  }

  handleChange(e) {
    this.setState({
      inputUser: e.target.value,
    });
  }

  render() {
    if (this.props.darkMode) {
      if (this.state.fetching) {
        return <Loader />;
      } else {
        if (this.state.countries.message == "Not Found") {
          return (
            <div className="country-not-found-container dark-c-n-f">
              <div className="search">
                <div className="search-field search-field-dark">
                  <button
                    class="search-button"
                    onClick={this.searchCountryByName.bind(this)}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                  <input
                    value={this.state.inputUser}
                    className="search-country-field input-dark"
                    placeholder="Search for a country..."
                    onChange={this.handleChange.bind(this)}
                  ></input>
                </div>
                <select
                  id="search-region-field"
                  className="search-region-field search-region-field-dark"
                  onChange={this.searchCountryByRegion.bind(this)}
                >
                  <option>Africa</option>
                  <option>Americas</option>
                  <option>Asia</option>
                  <option>Europe</option>
                  <option>Oceania</option>
                </select>
              </div>
              <div>
                <h2>Country not found</h2>
                <p>Make sure type well the name</p>
              </div>
            </div>
          );
        } else {
          let countriesData = this.state.countries.map((country) => (
            <li
              key={country.alpha3Code}
              onClick={() =>
                this.setState({
                  countryCode: country.alpha3Code,
                  specifiedCountry: true,
                })
              }
              className="dark-card"
            >
              <img src={country.flag} alt={country.name}></img>
              <div className="country-info">
                <p className="country-name">{country.name}</p>
                <p className="country-population">
                  <span>Population: </span>
                  {country.population}
                </p>
                <p className="country-region">
                  <span>Region: </span>
                  {country.region}
                </p>
                <p className="country-capital">
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
            </li>
          ));
          return (
            <div className="main-container dark-bg">
              {!this.state.specifiedCountry && (
                <div>
                  <div className="search">
                    <div className="search-field search-field-dark">
                      <button
                        class="search-button"
                        onClick={this.searchCountryByName.bind(this)}
                      >
                        <i className="fas fa-search"></i>
                      </button>
                      <input
                        value={this.state.inputUser}
                        className="search-country-field input-dark"
                        placeholder="Search for a country..."
                        onChange={this.handleChange.bind(this)}
                      ></input>
                    </div>
                    <select
                      id="search-region-field"
                      className="search-region-field search-region-field-dark"
                      onChange={this.searchCountryByRegion.bind(this)}
                    >
                      <option>Africa</option>
                      <option>Americas</option>
                      <option>Asia</option>
                      <option>Europe</option>
                      <option>Oceania</option>
                    </select>
                  </div>
                  <ul className="countries-container">{countriesData}</ul>
                </div>
              )}
              {this.state.specifiedCountry && (
                <div className="tall">
                  <button
                    className="back-button back-button-dark"
                    onClick={() => {
                      this.setState({
                        specifiedCountry: false,
                      });
                    }}
                  >
                    <i class="fas fa-arrow-left"></i> Back
                  </button>
                  <CountriesContainer
                    countryCode={this.state.countryCode}
                    darkMode={this.props.darkMode}
                  />
                </div>
              )}
            </div>
          );
        }
      }
    } else {
      if (this.state.fetching) {
        return <Loader />;
      } else {
        if (this.state.countries.message == "Not Found") {
          return (
            <div className="country-not-found-container">
              <div className="search">
                <div className="search-field">
                  <button
                    class="search-button"
                    onClick={this.searchCountryByName.bind(this)}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                  <input
                    value={this.state.inputUser}
                    className="search-country-field"
                    placeholder="Search for a country..."
                    onChange={this.handleChange.bind(this)}
                  ></input>
                </div>
                <select
                  id="search-region-field"
                  className="search-region-field"
                  onChange={this.searchCountryByRegion.bind(this)}
                >
                  <option>Africa</option>
                  <option>Americas</option>
                  <option>Asia</option>
                  <option>Europe</option>
                  <option>Oceania</option>
                </select>
              </div>
              <div>
                <h2>Country not found</h2>
                <p>Make sure type well the name</p>
              </div>
            </div>
          );
        } else {
          let countriesData = this.state.countries.map((country) => (
            <li
              key={country.alpha3Code}
              onClick={() =>
                this.setState({
                  countryCode: country.alpha3Code,
                  specifiedCountry: true,
                })
              }
            >
              <img src={country.flag} alt={country.name}></img>
              <div className="country-info">
                <p className="country-name">{country.name}</p>
                <p className="country-population">
                  <span>Population: </span>
                  {country.population}
                </p>
                <p className="country-region">
                  <span>Region: </span>
                  {country.region}
                </p>
                <p className="country-capital">
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
            </li>
          ));
          return (
            <div className="main-container">
              {!this.state.specifiedCountry && (
                <div>
                  <div className="search">
                    <div className="search-field">
                      <button
                        class="search-button"
                        onClick={this.searchCountryByName.bind(this)}
                      >
                        <i className="fas fa-search"></i>
                      </button>
                      <input
                        value={this.state.inputUser}
                        className="search-country-field"
                        placeholder="Search for a country..."
                        onChange={this.handleChange.bind(this)}
                      ></input>
                    </div>
                    <select
                      id="search-region-field"
                      className="search-region-field"
                      onChange={this.searchCountryByRegion.bind(this)}
                    >
                      <option>Africa</option>
                      <option>Americas</option>
                      <option>Asia</option>
                      <option>Europe</option>
                      <option>Oceania</option>
                    </select>
                  </div>
                  <ul className="countries-container">{countriesData}</ul>
                </div>
              )}
              {this.state.specifiedCountry && (
                <div class="tall">
                  <button
                    className="back-button"
                    onClick={() => {
                      this.setState({
                        specifiedCountry: false,
                      });
                    }}
                  >
                    <i class="fas fa-arrow-left"></i> Back
                  </button>
                  <CountriesContainer
                    countryCode={this.state.countryCode}
                    darkMode={this.props.darkMode}
                  />
                </div>
              )}
            </div>
          );
        }
      }
    }
  }
}

export default MainContainer;
