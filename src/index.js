import * as helloService from "./hello/helloWorld";
import { HelloApp } from "./hello/HelloApp";

const container = document.getElementById("app");
window.app = new HelloApp(container, helloService);
