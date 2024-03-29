import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    background-color: rgb(255, 254, 252);
    font-family: 'Nunito', sans-serif;
    overflow-x: hidden;
}

*:focus {
    outline: 0;
}

p {
  margin: 0px;
}

.btn-white {
  background-color: white;
  color: black;
  border-color: black;
  border-width: 1px;
}

.btn-white.focus {
  box-shadow: none;
}

.btn-white:hover {
  background-color: #faf7f5;
}

.btn-orange {
  background-color: #eb8646;
  color: white;
}

.btn-orange-light {
  background-color: rgba(235, 134, 70, 0.7);
  color: white;
}

.btn-orange.focus,
.btn-orange-light:focus {
  box-shadow: none;
}

.btn-orange:active,
.btn-orange-light:active {
  box-shadow: none;
}

.btn-orange:hover,
.btn-orange-light:hover {
  color: white;
  background-color: #e07d3f;
  border-color: #f5d4bf
}

.btn-orange:disabled,
.btn-orange-light:disabled {
  color: white;
  background-color: #eb9d6c;
  border-color: #f5d4bf
}

.btn-lg {
  padding: .7rem 2rem;
  font-size: 1.1rem;
}

*.btn:focus {outline:0;}

// inputs box-shadows
.form-control:focus {
  border-color: rgba(255, 129, 51, .5);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(248, 115, 32, .5);
}


/* Customize the label (the container) */
.categories-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.categories-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.categories-checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fffff;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-radius: 3px;
}

// .categories-checkmark:hover {
//   background-color: #fff9f5;
// }

.categories-container:hover {
  background-color: rgba(252,237,221, .5);
  border-color: rgba(252,237,221, .5);
  border-radius: 0 25px 25px 0;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(252,237,221, .5);
}

// /* On mouse-over, add a {color} background color */
// .categories-container:hover input ~ .categories-checkmark {
//   background-color: #ccc;
// }

/* When the checkbox is checked, add a {color} background */
.categories-container input:checked ~ .categories-checkmark {
  background-color: rgba(248, 115, 32, .9);
}

/* Create the checkmark/indicator (hidden when not checked) */
.categories-checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.categories-container input:checked ~ .categories-checkmark:after {
  display: block;
}



/* Style the checkmark/indicator */
.categories-container .categories-checkmark:after {
  left: 8px;
  top: 2px;
  width: 8.3px;
  height: 16.6px;
  border: solid white;
  border-width: 0 4px 4px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* CUSTOM RADIO BUTTONS */

/* Customize the label (the container) */
.radio-button-container,
.radio-button-container-2 {
  display: inline-block;
  position: relative;
  padding: 0 5px 0px 20px;
  margin: 0 10px 5px 0 ;
  cursor: pointer;
  font-size: 1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: bottom
}

/* Hide the browser's default radio button */
.radio-button-container input,
.radio-button-container-2 input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.radio-button-checkmark,
.radio-button-checkmark-2 {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: #ffffff;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(173, 181, 189);
}

/* On mouse-over, add a grey background color */
.radio-button-container:hover input ~ .radio-button-checkmark,
.radio-button-container-2:hover input ~ .radio-button-checkmark-2 {
  background-color: #fcf8eb;
}

/* When the radio button is checked, add a orange background */
.radio-button-container input:checked ~ .radio-button-checkmark,
.radio-button-container-2 input:checked ~ .radio-button-checkmark-2  {
  background-color: #fa8d48;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.radio-button-checkmark:after,
.radio-button-checkmark-2:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-button-container input:checked ~ .radio-button-checkmark:after,
.radio-button-container-2 input:checked ~ .radio-button-checkmark-2:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio-button-container .radio-button-checkmark:after,
.radio-button-container-2 .radio-button-checkmark-2:after {
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

// CUSTOM SLIDER

.switch-custom {
  position: relative;
  // display: inline-block;
  display: inline-block;
  width: 32px;
  height: 16px;
  padding: 0 5px 0px 20px;
  margin: 0 10px 5px 0 ;
  vertical-align: bottom

}

.switch-custom input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider-custom {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider-custom:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 2px;
  bottom: 1.5px;
  background-color: white;
  -webkit-transition: .2s;
  transition: .2s;
}

input:checked + .slider-custom {
  background-color: #fa8d48;
}

input:focus + .slider-custom {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider-custom:before {
  -webkit-transform: translateX(14px);
  -ms-transform: translateX(14px);
  transform: translateX(14px);
}

/* Rounded sliders */
.slider-custom.round {
  border-radius: 16px;
}

.slider-custom.round:before {
  border-radius: 50%;
}
`