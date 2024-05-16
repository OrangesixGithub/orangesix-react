/**
 * Constant returns the system base url based on the html element<br>
 * <meta id="react-base" name="react-base" content="your-url">
 */
let element: any = document.getElementById("react-base");
let url: null | string = element === null ? null : (element.content).replace(".br/", ".br");
const BASE: string | null = url === null ? null : url.substr(-1) === "/" ? url.slice(0, url.length - 1) : url;

/**
 * Constant returns the TOKEN to be used in asynchronous requests<br>
 * <meta id="csrf-token" name="csrf-token" content="your-token">
 */
let token: null | any = document.getElementById("csrf-token");
const TOKEN: string | null = token === null ? null : token.content;

/**
 * Constant returns user information based on html element<br>
 * <meta id="auth" name="auth" content="your-info">
 */
let user: null | any = document.getElementById("auth");
const USER: string | null = user === null ? null : user.content;

export { BASE, TOKEN, USER };