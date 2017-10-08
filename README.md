# New UI for legacy back office system

To create a new UI according to the specifications given in the UI doc.

## Getting Started

As per requirement added all the dependenices (css and js) files in the repository so application
can run even in absense of internet

New UI is desktop-first and responsive also in alignment with Visa design guidelines(Theme colors).

### Event timeline view:
    
    Current Selected event is show in visa-custom-green color.
    
    For Easy traceable of Issuer/Acquirer/Visa events:
        Issuer's are positioned right-side of timeline with visa-chart-blue color.
        Acquirer's are positioned left-side with visa-orange color.
        VISA Merchant is positioned on right-side with custom-red color.
        
## Prerequistis
    None

## Installing
    All external libraries are included in repository

## Deployment / Running
    We can clone the repository and open index.html file

## Code Organization:

    index.html is the Main file for the application.
    css, js, fonts, images are included in each respective folder
    Added case_details_data.js in data folder - which contains all case details (json) as js variable.  

## External Libraries: 
    Bootstrap - v3
    Jquery - v3.2.1

    Bootstrap is used for grid system and for responsive layout.
    Jquery - to render DOM elements fetched from ajax response( here events data is included
    as part of js file) and to switch between multiple views.

## To Do:

    Thought of implementing the exercise using React JS(which I am self-learning) but as libraries/frameworks should be minimal - used jquery.

## Acknowledgments

    Thanks for good exercise question !!




    



