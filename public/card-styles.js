import { css } from 'https://unpkg.com/lit?module'

export const cardStyles = css`
  .card {
    background-color: transparent;
    margin-bottom: 3rem;
    padding: 0 0;
  }
  .card-figure {
    background-color: #fff;
    margin-bottom: 0;
    padding: 0 0;
    position: relative;
  }
  .card-image {
    border: 1px solid #999;
    width: 100%;
  }
  .card-figcaption {
    bottom: 0;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
  }
  .card-figcaption:hover {
    opacity: 1;
  }
  .card-figcaption-action {
    display: block;
    height: 100%;
  }
  .card-figcaption-body {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    transform-style: preserve-3d;
  }
  .card-figcaption-body > :first-child {
    margin-top: 0;
  }
  .card-figcaption-body > :last-child {
    margin-bottom: 0;
  }
  .card-figcaption-body .card-text {
    color: #757575;
  }
  .card-figcaption-button {
    background-color: rgba(255, 255, 255, 0.9);
    color: #333;
  }
  .card-figcaption-button:hover {
    background-color: #fff;
    color: #333;
  }
  .card-body {
    padding: 0.78571rem 0 0;
  }
  .card-body > :first-child {
    margin-top: 0;
  }
  .card-body > :last-child {
    margin-bottom: 0;
  }
  .card-body .card-text {
    color: #757575;
  }
  .card-surTitle {
    float: right;
    margin-left: 1.5rem;
    max-width: 40%;
    text-align: right;
  }
  .card-footer {
    background-color: transparent;
    margin: 0;
  }
  .card-footer:after,
  .card-footer:before {
    content: ' ';
    display: table;
  }
  .card-footer:after {
    clear: both;
  }
  .card-button {
    margin-bottom: 0;
  }
`
