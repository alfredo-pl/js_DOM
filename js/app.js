document.addEventListener("DOMContentLoaded", function(event) { 
    
    let body = document.getElementsByTagName("body")[0];
        body.classList.add("bg-light");
    
    let div = document.createElement("div");
        div.classList.add("container");

    let row = document.createElement("div");
        row.classList.add("row");

    function checkoutForm(){
        let div = document.createElement("div");

        let img = document.createElement("img");
            div.setAttribute("class", "py-5 text-center");
            img.setAttribute("class", "d-block mx-auto mb-4");
            img.setAttribute("src","https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" );
            img.setAttribute("width","72" );
            img.setAttribute("height","72" );

        let h2 = document.createElement("H2");
            h2.innerText = "Checkout form";
            
        let p = document.createElement("p");
            p.classList.add("lead");
            p.innerText = "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
       
            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(p);
        return div;
    }
    //child to row
    function childFirstRow(){
        let div = document.createElement("div");
        div.setAttribute("class", "col-md-4 order-md-2 mb-4");

        let h4 = document.createElement("H4");
            h4.setAttribute("class", "d-flex justify-content-between align-items-center mb-3");

        let span1 = document.createElement("span");
            span1.setAttribute("class", "text-muted");
            span1.innerText = "Your cart";
        let span2 = document.createElement("span");
            span2.setAttribute("class", "badge badge-secondary badge-pill");  
            span2.innerText = "3";
        
            h4.appendChild(span1);
            h4.appendChild(span2);
            
            div.appendChild(h4);
            div.appendChild(listChildFirstRow());
            div.appendChild(promoCodeForm());
            
            return div;
    }
    
    // li to ul
    function listChildFirstRow(){
        let ul = document.createElement("ul");
            ul.setAttribute("class", "list-group mb-3");
            for(var i = 0; i < 5; i++){
                let li = document.createElement("li");
                    li.setAttribute("class", "list-group-item d-flex justify-content-between lh-condensed");
                    li.innerHTML = `<div><h6 class="my-0">Product ${i}</h6><small class="text-muted">Brief description</small></div><span class="text-muted">$12</span>`;
                    ul.appendChild(li);   
            }
        return ul;
    }
    // format to li
    function formatLi(){
        var li = document.getElementsByTagName("li");
      
            li[0].childNodes[0].firstChild.innerHTML = "Product name";

            li[1].childNodes[0].firstChild.innerHTML = "Second product";
            li[1].childNodes[1].innerHTML = "$8";

            li[2].childNodes[0].firstChild.innerHTML = "Third item";
            li[2].childNodes[1].innerHTML = "$5";
            
            li[3].classList.remove("lh-condensed");
            li[3].classList.add("bg-light");
            li[3].childNodes[0].classList.add("text-success");
            li[3].childNodes[0].firstChild.innerHTML = "Promo code";
            li[3].childNodes[0].lastChild.removeAttribute("class");
            li[3].childNodes[0].lastChild.innerHTML = "EXAMPLECODE";
            li[3].childNodes[1].removeAttribute("class");
            li[3].childNodes[1].classList.add("text-success");
            li[3].childNodes[1].innerHTML = "-$5";

            
        var strong = document.createElement("strong");
            li[4].classList.remove("lh-condensed");
            li[4].replaceChild(strong,li[4].childNodes[0]);
            li[4].insertBefore(li[4].childNodes[1],strong);
            li[4].childNodes[0].removeAttribute("class");
            li[4].childNodes[0].innerText="Total (USD)";
            li[4].childNodes[1].innerText="$20";
    }
    
    //form promo code
    function promoCodeForm(){
        let form = document.createElement("form");
            form.setAttribute("class", "card p-2");
        let div = document.createElement("div");
            div.setAttribute("class", "input-group");
        let input = document.createElement("input");
            input.setAttribute("class", "form-control");
            input.setAttribute("type", "text");
            input.setAttribute("placeholder","Promo code");

        let divI = document.createElement("div");
            divI.setAttribute("class", "input-group-append");
        let btn = document.createElement("button");
            btn.setAttribute("class", "btn btn-secondary");
            btn.setAttribute("type", "submit");
            btn.innerText ="Redeem";

        divI.appendChild(btn);
        div.appendChild(input);
        div.appendChild(divI);
        form.appendChild(div);

        return form;
    }

    function childLastRow(){
        let div = document.createElement("div");
            div.setAttribute("class", "col-md-8 order-md-1");

        let h4 = document.createElement("h4");
            h4.setAttribute("class", "mb-3");
            h4.innerText = "Billing address";

            div.appendChild(h4);
            div.appendChild(formLastRow());
        return div;
    }

    function formLastRow(){
        let form = document.createElement("form");
        form.setAttribute("class", "needs-validation");
        form.noValidate = true;
        
        let row = document.createElement("div");
            row.setAttribute("class", "row");
        
        let col6a = document.createElement("div");
            col6a.setAttribute("class", "col-md-6 mb-3");

        let labelName = document.createElement("label");
            labelName.htmlFor = "firstName";
            labelName.innerText = "First name";
        
        let inputName = document.createElement("input");
            inputName.setAttribute("class", "form-control");
            inputName.setAttribute("type", "text");
            inputName.setAttribute("id","firstName");
            inputName.setAttribute("placeholder","");
            inputName.setAttribute("value","");
            inputName.required = true;

        let validName = document.createElement("div");
            validName.setAttribute("class", "invalid-feedback");
            validName.textContent = "Valid first name is required."

        let col6b = document.createElement("div");
            col6b.setAttribute("class", "col-md-6 mb-3");

        let labelLastName = document.createElement("label");
            labelLastName.htmlFor = "lastName";
            labelLastName.innerText = "Last name";

        let inputLastName = document.createElement("input");
            inputLastName.setAttribute("class", "form-control");
            inputLastName.setAttribute("type", "text");
            inputLastName.setAttribute("id","lastName");
            inputLastName.setAttribute("placeholder","");
            inputLastName.setAttribute("value","");
            inputLastName.required = true;

        let validLastName = document.createElement("div");
            validLastName.setAttribute("class", "invalid-feedback");
            validLastName.textContent = "Valid last name is required.";
            
            col6a.appendChild(labelName);
            col6a.appendChild(inputName);
            col6a.appendChild(validName);
            
            col6b.appendChild(labelLastName);
            col6b.appendChild(inputLastName);
            col6b.appendChild(validLastName);
            row.appendChild(col6a);
            row.appendChild(col6b);
            
            form.appendChild(row);
            form.appendChild(userNameToform());
            form.appendChild(emailToform());
            form.appendChild(addressToform());
            form.appendChild(address2Toform());
            form.appendChild(addressCompleteForm());
            

            let hr1 = document.createElement("hr");
                hr1.setAttribute("class", "mb-4");
           
            let hr2 = document.createElement("hr");
                hr2.setAttribute("class", "mb-4");
        
            form.appendChild(hr1);
            form.appendChild(checkbox());
            form.appendChild(checkbox2());    
            form.appendChild(hr2);

            let h4 = document.createElement("h4");
                h4.setAttribute("class", "mb-3");
                h4.innerText = "Payment";

            form.appendChild(h4);
            form.appendChild(radioBtns());
            form.appendChild(dataNumberPayment());
            form.appendChild(validNumberCard());

            let hr3 = document.createElement("hr");
                hr3.setAttribute("class", "mb-4");

            form.appendChild(hr3);

            let btn = document.createElement("button");
                btn.setAttribute("class", "btn btn-primary btn-lg btn-block");
                btn.setAttribute("type", "submit");
                btn.innerText = "Continue to checkout";

            form.appendChild(btn);
        return form;
    }

    function userNameToform(){
        let div = document.createElement("div");
            div.setAttribute("class", "mb-3");
        
        let label = document.createElement("label");
            label.htmlFor = "username";
            label.innerText = "Username";
        
        let divInp = document.createElement("div");
            divInp.setAttribute("class", "input-group");

        let divInpPre = document.createElement("div");
            divInpPre.setAttribute("class", "input-group-prepend");
        
        let span= document.createElement("span");
            span.setAttribute("class", "input-group-text");
            span.innerText = "@";

        let inputUserName = document.createElement("input");
            inputUserName.setAttribute("class", "form-control");
            inputUserName.setAttribute("type", "text");
            inputUserName.setAttribute("id","username");
            inputUserName.setAttribute("placeholder","Username");
            inputUserName.required = true;

        let validUsername = document.createElement("div");
            validUsername.setAttribute("class", "invalid-feedback");
            validUsername.style.width = "100%";
            validUsername.textContent = "Your username is required.";

        divInpPre.appendChild(span);
        divInp.appendChild(divInpPre);
        divInp.appendChild(inputUserName);
        divInp.appendChild(validUsername);
        div.appendChild(label);
        div.appendChild(divInp);
        return div;
    }

    function emailToform(){
        let div = document.createElement("div");
            div.setAttribute("class", "mb-3");
        
        let label = document.createElement("label");
            label.htmlFor = "email";
            label.innerText = "Email";

        let span= document.createElement("span");
            span.setAttribute("class", "text-muted");
            span.innerText = " (Optional)";
        

        let input = document.createElement("input");
            input.setAttribute("class", "form-control");
            input.setAttribute("type", "email");
            input.setAttribute("id","email");
            input.setAttribute("placeholder","you@example.com");
        
        let validInput = document.createElement("div");
            validInput.setAttribute("class", "invalid-feedback");
            validInput.textContent = "Please enter a valid email address for shipping updates.";

        label.appendChild(span);
        div.appendChild(label); 
        div.appendChild(input);
        div.appendChild(validInput);

        return div;
    }

    function addressToform(){
        let div = document.createElement("div");
            div.setAttribute("class", "mb-3");
        
        let label = document.createElement("label");
            label.htmlFor = "address";
            label.innerText = "Address";

        let input = document.createElement("input");
            input.setAttribute("class", "form-control");
            input.setAttribute("type", "text");
            input.setAttribute("id","address");
            input.setAttribute("placeholder","1234 Main St");
            input.required = true;

        let validInput = document.createElement("div");
            validInput.setAttribute("class", "invalid-feedback");
            validInput.textContent = "Please enter your shipping address.";

        div.appendChild(label); 
        div.appendChild(input);
        div.appendChild(validInput);

        return div;
    }

    function address2Toform(){
        let div = document.createElement("div");
            div.setAttribute("class", "mb-3");
        
        let label = document.createElement("label");
            label.htmlFor = "address2";
            label.innerText = "Address 2 ";

        let span= document.createElement("span");
            span.setAttribute("class", "text-muted");
            span.innerText = "(Optional)";

        let input = document.createElement("input");
            input.setAttribute("class", "form-control");
            input.setAttribute("type", "text");
            input.setAttribute("id","address2");
            input.setAttribute("placeholder","Apartment or suite");

        label.appendChild(span);
        div.appendChild(label); 
        div.appendChild(input);

        return div;
    }

    function addressCompleteForm(){
        let row = document.createElement("div");
            row.setAttribute("class", "row");
        
        row.appendChild(countryAdress());
        row.appendChild(stateAdress());
        row.appendChild(zipAdress());
        return row;
    }

    function countryAdress(){
        let div = document.createElement("div");
            div.setAttribute("class", "col-md-5 mb-3");
        
        let label = document.createElement("label");
            label.htmlFor = "country";
            label.innerText = "Country ";

        let select = document.createElement("select");
            select.setAttribute("class", "custom-select d-block w-100");
            select.setAttribute("id", "country");
            select.required = true;
        
        let option1 = document.createElement("option");
            option1.value ="";
            option1.innerText = "Choose...";
        
        let option2 = document.createElement("option");
            option2.innerText = "United States";

        let validInput = document.createElement("div");
            validInput.setAttribute("class", "invalid-feedback");
            validInput.textContent = "Please select a valid country.";
        
        select.add(option1);
        select.add(option2);
        div.appendChild(label);
        div.appendChild(select);
        div.appendChild(validInput);
        return div;
    }


    function stateAdress(){
        let div = document.createElement("div");
            div.setAttribute("class", "col-md-4 mb-3");
        
        let label = document.createElement("label");
            label.htmlFor = "state";
            label.innerText = "State ";

        let select = document.createElement("select");
            select.setAttribute("class", "custom-select d-block w-100");
            select.setAttribute("id", "state");
            select.required = true;
        
        let option1 = document.createElement("option");
            option1.value ="";
            option1.innerText = "Choose...";
        
        let option2 = document.createElement("option");
            option2.innerText = "California";

        let validInput = document.createElement("div");
            validInput.setAttribute("class", "invalid-feedback");
            validInput.textContent = "Please provide a valid state.";
        
        select.add(option1);
        select.add(option2);
        div.appendChild(label);
        div.appendChild(select);
        div.appendChild(validInput);
        return div;
    }

    function zipAdress(){
        let div = document.createElement("div");
            div.setAttribute("class", "col-md-3 mb-3");
        
        let label = document.createElement("label");
            label.htmlFor = "zip";
            label.innerText = "Zip ";


        let input = document.createElement("input");
            input.setAttribute("class", "form-control");
            input.setAttribute("type", "text");
            input.setAttribute("id","zip");
            input.setAttribute("placeholder","");
            input.required = true;

        let validInput = document.createElement("div");
            validInput.setAttribute("class", "invalid-feedback");
            validInput.textContent = "Zip code required.";
        
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(validInput);
        return div;
    }

    function checkbox(){
        

        let div = document.createElement("div");
            div.setAttribute("class", "custom-control custom-checkbox");
        
        let label = document.createElement("label");
            label.htmlFor = "same-address";
            label.setAttribute("class", "custom-control-label");
            label.innerText = "Shipping address is the same as my billing address ";


        let input = document.createElement("input");
            input.setAttribute("class", "custom-control-input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("id","same-address");
 
        div.appendChild(input);
        div.appendChild(label);
        return div;
    }
    function checkbox2(){
        

        let div = document.createElement("div");
            div.setAttribute("class", "custom-control custom-checkbox");
        
        let label = document.createElement("label");
            label.htmlFor = "save-info";
            label.setAttribute("class", "custom-control-label");
            label.innerText = "Save this information for next time ";


        let input = document.createElement("input");
            input.setAttribute("class", "custom-control-input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("id","save-info");
 
        div.appendChild(input);
        div.appendChild(label);
        return div;
    }

    function radioBtns(){
        

        let div = document.createElement("div");
            div.setAttribute("class", "d-block my-3");
        
            // one
        let divCrt = document.createElement("div");
            divCrt.setAttribute("class", "custom-control custom-radio");
        
        let label = document.createElement("label");
            label.htmlFor = "credit";
            label.setAttribute("class", "custom-control-label");
            label.innerText = "Credit card";


        let input = document.createElement("input");
            input.setAttribute("class", "custom-control-input");
            input.setAttribute("type", "radio");
            input.setAttribute("id","credit");
            input.setAttribute("name","paymentMethod");
            input.required = true;
            input.checked = true;
        
        //two
        let divCrt2 = document.createElement("div");
            divCrt2.setAttribute("class", "custom-control custom-radio");
        
        let label2 = document.createElement("label");
            label2.htmlFor = "debit";
            label2.setAttribute("class", "custom-control-label");
            label2.innerText = "Debit card";


        let input2 = document.createElement("input");
            input2.setAttribute("class", "custom-control-input");
            input2.setAttribute("type", "radio");
            input2.setAttribute("id","debit");
            input2.setAttribute("name","paymentMethod");
            input2.required = true;
        
           //three
        let divCrt3 = document.createElement("div");
            divCrt3.setAttribute("class", "custom-control custom-radio");
        
        let label3 = document.createElement("label");
            label3.htmlFor = "paypal";
            label3.setAttribute("class", "custom-control-label");
            label3.innerText = "PayPal";


        let input3 = document.createElement("input");
            input3.setAttribute("class", "custom-control-input");
            input3.setAttribute("type", "radio");
            input3.setAttribute("id","paypal");
            input3.setAttribute("name","paymentMethod");
            input3.required = true;
            
        
        divCrt.appendChild(input);
        divCrt.appendChild(label);
        
        divCrt2.appendChild(input2);
        divCrt2.appendChild(label2);

        divCrt3.appendChild(input3);
        divCrt3.appendChild(label3);

        div.appendChild(divCrt);
        div.appendChild(divCrt2);
        div.appendChild(divCrt3);
        return div;
    }

    function dataNumberPayment(){
        let row = document.createElement("div");
            row.setAttribute("class", "row");

        let col1 = document.createElement("div");
            col1.setAttribute("class", "col-md-6 mb-3");
        
        
        let label = document.createElement("label");
            label.htmlFor = "cc-name";
            label.innerText = "Name on card";

        let input = document.createElement("input");
            input.setAttribute("class", "form-control");
            input.setAttribute("type", "text");
            input.setAttribute("id","cc-name");
            input.setAttribute("placeholder"," ");
            input.required = true;

        let small = document.createElement("small");
            small.setAttribute("class", "text-muted");
            small.innerText = "Full name as displayed on card";

        let validInput = document.createElement("div");
            validInput.setAttribute("class", "invalid-feedback");
            validInput.textContent = "Name on card is required.";

        let col2 = document.createElement("div");
            col2.setAttribute("class", "col-md-6 mb-3");
        
        let label2 = document.createElement("label");
            label2.htmlFor = "cc-number";
            label2.innerText = "Credit card number";

        let input2 = document.createElement("input");
            input2.setAttribute("class", "form-control");
            input2.setAttribute("type", "text");
            input2.setAttribute("id","cc-number");
            input2.setAttribute("placeholder"," ");
            input2.required = true;

        let validInput2 = document.createElement("div");
            validInput2.setAttribute("class", "invalid-feedback");
            validInput2.textContent = "Credit card number is required.";


        col1.appendChild(label);
        col1.appendChild(input);
        col1.appendChild(small);
        col1.appendChild(validInput);

        col2.appendChild(label2);
        col2.appendChild(input2);
        col2.appendChild(validInput2);

        row.appendChild(col1);
        row.appendChild(col2);
        return row;
        
    }

    function validNumberCard(){
        let row = document.createElement("div");
            row.setAttribute("class", "row");

        let col1 = document.createElement("div");
            col1.setAttribute("class", "col-md-3 mb-3");
        
        
        let label = document.createElement("label");
            label.htmlFor = "cc-expiration";
            label.innerText = "Expiration";

        let input = document.createElement("input");
            input.setAttribute("class", "form-control");
            input.setAttribute("type", "text");
            input.setAttribute("id","cc-expiration");
            input.setAttribute("placeholder"," ");
            input.required = true;

        let validInput = document.createElement("div");
            validInput.setAttribute("class", "invalid-feedback");
            validInput.textContent = "Expiration date required.";

        let col2 = document.createElement("div");
            col2.setAttribute("class", "col-md-3 mb-3");
        
        let label2 = document.createElement("label");
            label2.htmlFor = "cc-vv";
            label2.innerText = "CVV";

        let input2 = document.createElement("input");
            input2.setAttribute("class", "form-control");
            input2.setAttribute("type", "text");
            input2.setAttribute("id","cc-vv");
            input2.setAttribute("placeholder"," ");
            input2.required = true;

        let validInput2 = document.createElement("div");
            validInput2.setAttribute("class", "invalid-feedback");
            validInput2.textContent = "Security code required.";


        col1.appendChild(label);
        col1.appendChild(input);
        col1.appendChild(validInput);

        col2.appendChild(label2);
        col2.appendChild(input2);
        col2.appendChild(validInput2);

        row.appendChild(col1);
        row.appendChild(col2);
        return row;
        
    }

    function footer(){
        let footer = document.createElement("footer");
            footer.setAttribute("class","my-5 pt-5 text-muted text-center text-small");
        
        let p = document.createElement("p");
            p.setAttribute("class","mb-1");
            p.innerHTML = "&copy; 2017-2019 Company Name";

        let ul = document.createElement("ul");
            ul.setAttribute("class", "list-inline");
        
        let li1 = document.createElement("li");
            li1.setAttribute("class","list-inline-item");

        let a1 =document.createElement("a");
            a1.setAttribute("href","#");
            a1.innerText= "Privacy";
        
        let li2 = document.createElement("li");
            li2.setAttribute("class","list-inline-item");
            
        let a2 =document.createElement("a");
            a2.setAttribute("href","#");
            a2.innerText= "Terms";

        let li3 = document.createElement("li");
            li3.setAttribute("class","list-inline-item");
            
        let a3 =document.createElement("a");
            a3.setAttribute("href","#");
            a3.innerText= "Support";

        li1.appendChild(a1);
        li2.appendChild(a2);
        li3.appendChild(a3);

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        
        footer.appendChild(p);
        footer.appendChild(ul);
        
        return footer;
    }

    body.insertBefore(div, body.childNodes[0]);
    div.appendChild(checkoutForm());
    div.appendChild(row);
    row.appendChild(childFirstRow());
    row.appendChild(childLastRow());
    formatLi();
    div.appendChild(footer());
    
});
