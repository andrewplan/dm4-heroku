import HelloHTML from "./Hello.html";
import "./Hello.css";

export default function Hello() {
	return {
		  restrict: "E"
		, scope: {}
		, template: HelloHTML
	}
}