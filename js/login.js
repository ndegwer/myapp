var form = {
    view: "form",
    elements: [
        {view: "text", label: "Username", name: "username", labelWidth: 90},
        {view: "text", type: "password", label: "Password", name: "password", labelWidth: 90},
        {type: "clean", cols: [
                {view: "button", type: "form", label: "Login"}
            ]}
    ]};

var toolbar = {
    view: "toolbar", 
    elements: [
        {view: "label", label: "Touch App <sup class='tb_sup'>mobile</sup>", align: "center"}
    ]
};

var loginView = {
    type: "clean", 
    rows: [
        toolbar, 
        {gravity: 0.35},
        {type: "clean", 
            cols: [
                {width: 15}, 
                form, 
                {width: 15}
            ]}, 
     ]};

dhx.ready(function() {
    dhx.ui.fullScreen();
    dhx.ui(loginView);
});

