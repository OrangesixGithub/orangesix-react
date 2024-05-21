import $ from "jquery";
import { sendMessage } from "./message";
import { IUtilsResponseType, IUtilsResponseError } from "./@types";

/**
 * Performed application response management
 */
export function response<Type>(
    response: IUtilsResponseType<Type>,
    form: string = ""
): void {
    let data: IUtilsResponseType<Type> = response;
    if (!data) {
        return;
    }

    if (data.redirect) {
        window.location.href = data.redirect;
    }

    if (data.errors) {
        messageField(data.errors, form.length === 0 ? "" : form);
    }

    if (data.accept) {
        messageField(data.accept, form.length === 0 ? "" : form, "is-valid");
    }

    if (data.message) {
        sendMessage<"snackbar">({
            message: { ...data.message },
            type: "message",
            library: "snackbar"
        });
    }
}

/**
 * Displays the message within the form field
 */
export function messageField(
    data: IUtilsResponseError,
    form: string = "",
    type: string = "is-invalid"
): void {
    // @ts-ignore
    let body = window.self === window.top ? $("body") : $(window.frameElement).parents("body");
    let formulario = body.find("#" + form);
    tabViewActiveError(form, data);

    let validationFeedbackClass: string = type === "is-invalid" ? "invalid-feedback" : "valid-feedback";
    let removeValidationFeedbackClass: string = type === "is-invalid" ? "is-valid" : "is-invalid";

    $.each(data, (key: string, value) => {
        let text = "";
        value.forEach(value => text += value + "<br>");

        formulario.find("input[name='" + key + "']")
            .addClass(type)
            .parent()
            .find("#j_feedback[data-name='" + key + "']")
            .addClass(validationFeedbackClass)
            .removeClass(removeValidationFeedbackClass)
            .html(text);

        formulario.find("input[name='" + key + "']")
            .addClass(type)
            .parent()
            .parent()
            .find("#j_feedback[data-name='" + key + "']")
            .addClass(validationFeedbackClass)
            .removeClass(removeValidationFeedbackClass)
            .html(text);

        formulario.find("input[name='" + key + "']")
            .addClass(type)
            .parent()
            .parent()
            .parent()
            .find("#j_feedback[data-name='" + key + "']")
            .addClass(validationFeedbackClass)
            .removeClass(removeValidationFeedbackClass)
            .html(text);

        formulario.find("select[name='" + key + "']")
            .addClass(type)
            .parent()
            .find("#j_feedback[data-name='" + key + "']")
            .addClass(validationFeedbackClass)
            .removeClass(removeValidationFeedbackClass)
            .html(text);

        formulario.find("textarea[name='" + key + "']")
            .addClass(type)
            .parent()
            .find("#j_feedback[data-name='" + key + "']")
            .addClass(validationFeedbackClass)
            .removeClass(removeValidationFeedbackClass)
            .html(text);

        formulario.find("#j_feedback[data-name='" + key + "']")
            .addClass(type)
            .html(text);
    });
}

/**
 * Clear feedback messages from the form provided
 */
export function messageFieldClear(
    form: string = ""
): void {
    // @ts-ignore
    let body = window.self === window.top ? $("body") : $(window.frameElement).parents("body");
    let formulario = body.find("#" + form);
    if (formulario.length === 0) {
        return;
    }

    let validationClass: string[] = ["is-invalid", "is-valid", "p-invalid"];
    let validationFeedbackClass: string[] = ["invalid-feedback", "valid-feedback"];

    $.each(formulario.find("input"), function () {
        $(this)
            .removeClass(validationClass)
            .parent()
            .find("#j_feedback")
            .removeClass(validationFeedbackClass)
            .html("");

        $(this)
            .removeClass(validationClass)
            .parent()
            .parent()
            .find("#j_feedback")
            .removeClass(validationFeedbackClass)
            .html("");

        $(this)
            .removeClass(validationClass)
            .parent()
            .parent()
            .parent()
            .find("#j_feedback")
            .removeClass(validationFeedbackClass)
            .html("");
    });

    $.each(formulario.find("select"), function () {
        $(this)
            .removeClass(validationClass)
            .parent()
            .find("#j_feedback")
            .removeClass(validationFeedbackClass)
            .html("");
    });

    $.each(formulario.find("textarea"), function () {
        $(this)
            .removeClass(validationClass)
            .parent()
            .find("#j_feedback")
            .removeClass(validationFeedbackClass)
            .html("");
    });

    $.each(formulario.find("#j_feedback"), function () {
        $(this).removeClass(validationClass).html("");
    });
}

/**
 * Activates the TabView when the field presents an error
 */
export function tabViewActiveError(
    form: string = "",
    errors: IUtilsResponseError
): void {
    // @ts-ignore
    let body = window.self === window.top ? $("body") : $(window.frameElement).parents("body");
    let TabView = body.find("#" + form);
    if (TabView.length === 0) {
        return;
    }

    let field = Object.keys(errors)[0];
    let TabViewSelected = TabView.find("*[id='" + field + "']").closest(".tab-pane");
    let id = TabViewSelected.attr("id");
    TabViewSelected.parent(".tab-content").children(".tab-pane").each(function (_, value) {
        if (typeof value !== "undefined") {
            if ($(value).attr("id") === id) {
                $(value).addClass("show active");
                body.find(".nav-item button[data-bs-target='#" + id + "']").addClass("active");
            } else {
                $(value).removeClass("show active");
                body.find(".nav-item button[data-bs-target='#" + $(value).attr("id") + "']").removeClass("active");
            }
        }
    });
}