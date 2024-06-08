import React from "react";

const emailValidator =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      emailAddress: "",
      password: "",
      phoneCountryCode: "",
      phoneNumber: "",
      country: "",
      city: "",
      panNo: "",
      aadharNo: "",
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailAddressError: "",
      passwordError: "",
      phoneCountryCodeError: "",
      phoneNumberError: "",
      countryError: "",
      cityError: "",
      panNoError: "",
      aadharNoError: "",
      isFormSubmitted: false,
      showPassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePhoneCountryCode = this.validatePhoneCountryCode.bind(this);
    this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
    this.validateCountry = this.validateCountry.bind(this);
    this.validateCity = this.validateCity.bind(this);
    this.validatePanNo = this.validatePanNo.bind(this);
    this.validateAadharNo = this.validateAadharNo.bind(this);
    this.validateField = this.validateField.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleBlur(event) {
    const { name } = event.target;
    this.validateField(name);
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "firstName",
      "lastName",
      "username",
      "emailAddress",
      "password",
      "phoneCountryCode",
      "phoneNumber",
      "country",
      "city",
      "panNo",
      "aadharNo",
    ];
    let isValid = true;
    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });
  }

  validateField(name) {
    let isValid = false;

    if (name === "firstName") isValid = this.validateFirstName();
    else if (name === "lastName") isValid = this.validateLastName();
    else if (name === "username") isValid = this.validateUsername();
    else if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "password") isValid = this.validatePassword();
    else if (name === "phoneCountryCode")
      isValid = this.validatePhoneCountryCode();
    else if (name === "phoneNumber") isValid = this.validatePhoneNumber();
    else if (name === "country") isValid = this.validateCountry();
    else if (name === "city") isValid = this.validateCity();
    else if (name === "panNo") isValid = this.validatePanNo();
    else if (name === "aadharNo") isValid = this.validateAadharNo();
    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName;
    if (value.trim() === "") firstNameError = "First Name is required";

    this.setState({ firstNameError });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName;
    if (value.trim() === "") lastNameError = "Last Name is required";

    this.setState({ lastNameError });
    return lastNameError === "";
  }

  validateUsername() {
    let usernameError = "";
    const value = this.state.username;
    if (value.trim() === "") usernameError = "Username is required";

    this.setState({ usernameError });
    return usernameError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim() === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value))
      emailAddressError = "Email is not valid";

    this.setState({ emailAddressError });
    return emailAddressError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim() === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({ passwordError });
    return passwordError === "";
  }

  validatePhoneCountryCode() {
    let phoneCountryCodeError = "";
    const value = this.state.phoneCountryCode;
    if (value.trim() === "") phoneCountryCodeError = "Country Code is required";

    this.setState({ phoneCountryCodeError });
    return phoneCountryCodeError === "";
  }

  validatePhoneNumber() {
    let phoneNumberError = "";
    const value = this.state.phoneNumber;
    if (value.trim() === "") phoneNumberError = "Phone Number is required";

    this.setState({ phoneNumberError });
    return phoneNumberError === "";
  }

  validateCountry() {
    let countryError = "";
    const value = this.state.country;
    if (value.trim() === "") countryError = "Country is required";

    this.setState({ countryError });
    return countryError === "";
  }

  validateCity() {
    let cityError = "";
    const value = this.state.city;
    if (value.trim() === "") cityError = "City is required";

    this.setState({ cityError });
    return cityError === "";
  }

  validatePanNo() {
    let panNoError = "";
    const value = this.state.panNo;
    if (value.trim() === "") panNoError = "PAN Number is required";

    this.setState({ panNoError });
    return panNoError === "";
  }

  validateAadharNo() {
    let aadharNoError = "";
    const value = this.state.aadharNo;
    if (value.trim() === "") aadharNoError = "Aadhar Number is required";

    this.setState({ aadharNoError });
    return aadharNoError === "";
  }

  togglePasswordVisibility() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    return (
      <div className="main">
        <h3>SignUp Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>Username: {this.state.username}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            <div>
              Phone Number: {this.state.phoneCountryCode}{" "}
              {this.state.phoneNumber}
            </div>
            <div>Country: {this.state.country}</div>
            <div>City: {this.state.city}</div>
            <div>PAN Number: {this.state.panNo}</div>
            <div>Aadhar Number: {this.state.aadharNo}</div>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.firstNameError && (
                <div className="errorMsg">{this.state.firstNameError}</div>
              )}
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.lastNameError && (
                <div className="errorMsg">{this.state.lastNameError}</div>
              )}
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.usernameError && (
                <div className="errorMsg">{this.state.usernameError}</div>
              )}
              <input
                type="email"
                placeholder="Email Address"
                name="emailAddress"
                value={this.state.emailAddress}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.emailAddressError && (
                <div className="errorMsg">{this.state.emailAddressError}</div>
              )}
              <div>
                <input
                  type={this.state.showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                />
                <button type="button" onClick={this.togglePasswordVisibility}>
                  {this.state.showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <br />
              {this.state.passwordError && (
                <div className="errorMsg">{this.state.passwordError}</div>
              )}
              <div>
                <input
                  type="text"
                  placeholder="Country Code"
                  name="phoneCountryCode"
                  value={this.state.phoneCountryCode}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                />
              </div>
              <br />
              {this.state.phoneCountryCodeError && (
                <div className="errorMsg">
                  {this.state.phoneCountryCodeError}
                </div>
              )}
              {this.state.phoneNumberError && (
                <div className="errorMsg">{this.state.phoneNumberError}</div>
              )}
              <select
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
              </select>
              <br />
              {this.state.countryError && (
                <div className="errorMsg">{this.state.countryError}</div>
              )}
              <select
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              >
                <option value="">Select City</option>
                {this.state.country === "India" && (
                  <>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                  </>
                )}
                {this.state.country === "USA" && (
                  <>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                  </>
                )}
                {this.state.country === "Canada" && (
                  <>
                    <option value="Toronto">Toronto</option>
                    <option value="Vancouver">Vancouver</option>
                  </>
                )}
              </select>
              <br />
              {this.state.cityError && (
                <div className="errorMsg">{this.state.cityError}</div>
              )}
              <input
                type="text"
                placeholder="PAN Number"
                name="panNo"
                value={this.state.panNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.panNoError && (
                <div className="errorMsg">{this.state.panNoError}</div>
              )}
              <input
                type="text"
                placeholder="Aadhar Number"
                name="aadharNo"
                value={this.state.aadharNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.aadharNoError && (
                <div className="errorMsg">{this.state.aadharNoError}</div>
              )}
              <button type="submit">Signup</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default FormComponent;
