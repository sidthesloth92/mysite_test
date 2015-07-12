$(document).ready(function() {
    var currentFormElementIndex;
    var svgNS = "http://www.w3.org/2000/svg";
    var xLinkNS = 'http://www.w3.org/1999/xlink';

    var contact_form_elements = document.querySelectorAll('.contact_form_element');
    var contact_form_length = contact_form_elements.length;

    var contact_submit_button = $('.contact_submit_button');
    var contact_form_wrapper = $('.contact_form_wrapper');
    var contact_submit_banner = $('.contact_submit_banner');
    
    var contact_submit_svg = $('.contact_submit_svg');
    for (var i = 1; i < contact_form_elements.length; i++) {
        contact_form_elements[i].classList.add('contact_future');
    }

    currentFormElementIndex = 0;
    contact_submit_button.hide();
    contact_form_wrapper.show();
    contact_submit_banner.hide();

    $('#contact_backward_button').click(function() {
        if (currentFormElementIndex > 0) {
            contact_form_elements[currentFormElementIndex].classList.toggle('contact_future');
            contact_form_elements[--currentFormElementIndex].classList.toggle('contact_past');
        }
        displayButton();
    });

    $('#contact_forward_button').click(function() {
        if (currentFormElementIndex < contact_form_length - 1) {
            contact_form_elements[currentFormElementIndex].classList.toggle('contact_past');
            contact_form_elements[++currentFormElementIndex].classList.toggle('contact_future');
        }
        displayButton();
    });

    contact_submit_button.click(function(event) {
        contact_form_wrapper.hide();
        contact_submit_banner.show().css('top', '0');

        setTimeout(function() {
          blowBalloons();
        }, 200);
    });

    function displayButton() {
        if (currentFormElementIndex == (contact_form_length - 1)) {
            contact_submit_button.show();
        } else {
            contact_submit_button.hide();
        }
    }


    function blowBalloons() {
        
        var colors = ['orange', 'mediumslateblue', 'hotpink', 'springgreen', 'turquoise', 'red', 'yellow', 'violet'];

        var contact_submit_banner = $('.contact_submit_banner');
        

        var cCX = Math.floor(contact_submit_banner.width() / 2);
        var cCY = Math.floor(contact_submit_banner.height() / 2);
        var cR = 100;
        var numberOfBubbles = 1000;


        for (var i = 0; i < numberOfBubbles; i++) {
            var circle = document.createElementNS(svgNS, 'circle');

            var angle = i * Math.ceil(360 / numberOfBubbles);

            var cx = cCX + ((cR + i + 5) * Math.cos(angle));
            var cy = cCY + ((cR + i + 5) * Math.sin(angle));


            circle.setAttributeNS(null, 'cx', cx);
            circle.setAttributeNS(null, 'cy', cy);
            circle.setAttributeNS(null, 'fill', colors[(i % colors.length)])

            var animate = document.createElementNS(svgNS, 'animate');
            animate.setAttributeNS(null, 'attributeName', 'r');
            animate.setAttributeNS(null, 'attributeType', "XML");
            animate.setAttributeNS(null, 'from', 0);
            animate.setAttributeNS(null, 'to', 40);
            animate.setAttributeNS(null, 'dur', '2s');
            animate.setAttributeNS(null, 'fill', 'freeze');

            //animate.setAttributeNS(null, 'repeatCount', 'indefinite');
            animate.setAttributeNS(null, 'begin', (3 + (i * .01)) + 's');

            circle.appendChild(animate);
            contact_submit_svg.append(circle);
        }
    }
});
