gsap.fromTo("input", {
    y: 40,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    stagger: 0.1
});

const form = document.querySelector("form");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("form-status");
    let data = new FormData(event.target);
    if (form.mobile.value.length === 10) {
        form.subscribe.value = "Subscribing...";
        form.subscribe.setAttribute("disabled", "true");
        fetch(form.action + new URLSearchParams(data).toString(), {
            mode: 'no-cors',
            method: form.method,
        }).then((resp) => {
            status.textContent = "Thanks for subscribing!";
            status.classList.add("success");
            form.reset()
        }).catch(
            (error) => {
                status.textContent = "Oops! There was a problem submitting your form"
                status.classList.remove("success");
            }
        );
        form.subscribe.value = "Subscribe";
        form.subscribe.setAttribute("disabled", "false");
    } else {
        alert("Mobile number must be 10 digits long")
    }
}

form.addEventListener("submit", handleSubmit)