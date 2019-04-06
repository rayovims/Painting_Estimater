$("#submit").on("click", function(e) {
    let livingTotal = 0;
    let diningTotal = 0;
    let bedroomTotal = 0;
    let officeTotal = 0;
    let hallwaysTotal = 0;
    let stairwayTotal = 0;
    let foyerTotal = 0;
    let lobbyTotal = 0;
    let bathroomTotal = 0;
    let familyTotal = 0;
    let kitchenTotal = 0;
    let railingsTotal = 0;
    let bathroomRenovation = 0;
    let walls = 0;
    let trim = 0;
    let ceiling = 0;

    walls = parseInt($('#wall_input').val(),10);
    trim = parseInt($('#trim_input').val(), 10);
    ceiling = parseInt($('#ceiling_input').val(), 10);
    
    let total = 0;

    e.preventDefault();

    railingsTotal = parseInt($('#railings').val(), 10);

    bathroomRenovation = parseInt($('#bathroomRenovation').val(), 10);


    $("#bathroomRenovationTotal").html("$" + bathroomRenovation);

    $("#railingsTotal").html("$" + railingsTotal);

    //living room Logic
    var livingArr = [];
    var livingroom = $("#livingroom option:selected").val();
    var livingroomTrim = $('input[name="trim1"]:checked').val();
    var livingroomWall = $('input[name="wall1"]:checked').val();
    var livingroomCeiling = $('input[name="ceiling1"]:checked').val();

    if (livingroomTrim != null) {
        livingArr.push(trim);
    }
    if (livingroomWall != null) {
        livingArr.push(walls);
    }
    if (livingroomCeiling != null) {
        livingArr.push(ceiling);
    }
    livingTotal = livingArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (livingroom == 0) {
        livingTotal = 0
    } else {
        livingTotal = Math.round((livingTotal * livingroom) / 10) * 10;
    }
    $("#livingTotal").html("$" + livingTotal);

    //dining room Logic
    var diningArr = [];
    var diningroom = $("#diningroom option:selected").val();
    var diningroomTrim = $('input[name="trim5"]:checked').val();
    var diningroomWall = $('input[name="wall5"]:checked').val();
    var diningroomCeiling = $('input[name="ceiling5"]:checked').val();

    if (diningroomTrim != null) {
        diningArr.push(trim);
    }
    if (diningroomWall != null) {
        diningArr.push(walls);
    }
    if (diningroomCeiling != null) {
        diningArr.push(ceiling);
    }
    diningTotal = diningArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (diningroom == 0) {
        diningTotal = 0
    } else {
        diningTotal = Math.round((diningTotal * diningroom) / 10) * 10;
    }
    $("#diningTotal").html("$" + diningTotal);

    //office room Logic
    var officeArr = [];
    var office = $("#office option:selected").val();
    var officeTrim = $('input[name="trim6"]:checked').val();
    var officeWall = $('input[name="wall6"]:checked').val();
    var officeCeiling = $('input[name="ceiling6"]:checked').val();

    if (officeTrim != null) {
        officeArr.push(trim);
    }
    if (officeWall != null) {
        officeArr.push(walls);
    }
    if (officeCeiling != null) {
        officeArr.push(ceiling);
    }
    officeTotal = officeArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (office == 0) {
        officeTotal = 0
    } else {
        officeTotal = Math.round((officeTotal * office) / 10) * 10;
    }
    $("#officeTotal").html("$" + officeTotal);

    //hallways room Logic
    var hallwaysArr = [];
    var hallways = $("#hallways option:selected").val();
    var hallwaysTrim = $('input[name="trim7"]:checked').val();
    var hallwaysWall = $('input[name="wall7"]:checked').val();
    var hallwaysCeiling = $('input[name="ceiling7"]:checked').val();

    if (hallwaysTrim != null) {
        hallwaysArr.push(trim);
    }
    if (hallwaysWall != null) {
        hallwaysArr.push(walls);
    }
    if (hallwaysCeiling != null) {
        hallwaysArr.push(ceiling);
    }
    hallwaysTotal = hallwaysArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (hallways == 0) {
        hallwaysTotal = 0
    } else {
        hallwaysTotal = Math.round((hallwaysTotal * hallways) / 10) * 10;
    }
    $("#hallwaysTotal").html("$" + hallwaysTotal);

    //stairways Logic
    var stairwaysArr = [];
    var stairways = $("#stairways option:selected").val();
    var stairwaysTrim = $('input[name="trim8"]:checked').val();
    var stairwaysWall = $('input[name="wall8"]:checked').val();
    var stairwaysCeiling = $('input[name="ceiling8"]:checked').val();

    if (stairwaysTrim != null) {
        stairwaysArr.push(trim);
    }
    if (stairwaysWall != null) {
        stairwaysArr.push(walls);
    }
    if (stairwaysCeiling != null) {
        stairwaysArr.push(ceiling);
    }
    stairwayTotal = stairwaysArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (stairways == 0) {
        stairwayTotal = 0
    } else {
        stairwayTotal = Math.round((stairwayTotal * stairways) / 10) * 10;
    }
    $("#stairwaysTotal").html("$" + stairwayTotal);

    //foyer Logic
    var foyerArr = [];
    var foyer = $("#foyer option:selected").val();
    var foyerTrim = $('input[name="trim9"]:checked').val();
    var foyerWall = $('input[name="wall9"]:checked').val();
    var foyerCeiling = $('input[name="ceiling9"]:checked').val();

    if (foyerTrim != null) {
        foyerArr.push(100);
    }
    if (foyerWall != null) {
        foyerArr.push(200);
    }
    if (foyerCeiling != null) {
        foyerArr.push(100);
    }
    foyerTotal = foyerArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (foyer == 0) {
        foyerTotal = 0
    } else {
        foyerTotal = Math.round((foyerTotal * foyer) / 10) * 10;
    }
    $("#foyerTotal").html("$" + foyerTotal);

    //lobby Logic
    var lobbyArr = [];
    var lobby = $("#lobby option:selected").val();
    var lobbyTrim = $('input[name="trimA"]:checked').val();
    var lobbyWall = $('input[name="wallA"]:checked').val();
    var lobbyCeiling = $('input[name="ceilingA"]:checked').val();

    if (lobbyTrim != null) {
        lobbyArr.push(trim);
    }
    if (lobbyWall != null) {
        lobbyArr.push(walls);
    }
    if (lobbyCeiling != null) {
        lobbyArr.push(ceiling);
    }
    lobbyTotal = lobbyArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (lobby == 0) {
        lobbyTotal = 0
    } else {
        lobbyTotal = Math.round((lobbyTotal * lobby) / 10) * 10;
    }
    $("#lobbyTotal").html("$" + lobbyTotal);

    //Family Room Logic
    var familyArr = [];
    var familyroom = $("#familyroom option:selected").val();
    var familyTrim = $('input[name="trimB"]:checked').val();
    var familyWall = $('input[name="wallB"]:checked').val();
    var familyCeiling = $('input[name="ceilingB"]:checked').val();

    if (familyTrim != null) {
        familyArr.push(trim);
    }
    if (familyWall != null) {
        familyArr.push(walls);
    }
    if (familyCeiling != null) {
        familyArr.push(ceiling);
    }
    familyTotal = familyArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (familyroom == 0) {
        familyTotal = 0
    } else {
        familyTotal = Math.round((familyTotal * familyroom) / 10) * 10;
    }
    $("#familyTotal").html("$" + familyTotal);

    // Kitchen Logic
    var kitchen = $("#kitchen option:selected").val();
    var kitchenArr = [];
    var kitchenTrim = $('input[name="trim2"]:checked').val();
    var kitchenWall = $('input[name="wall2"]:checked').val();
    var kitchenCeiling = $('input[name="ceiling2"]:checked').val();

    if (kitchenTrim != null) {
        kitchenArr.push(trim);
    }
    if (kitchenWall != null) {
        kitchenArr.push(walls);
    }
    if (kitchenCeiling != null) {
        kitchenArr.push(ceiling);
    }
    kitchenTotal = kitchenArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (kitchen == 0) {
        kitchenTotal = 0
    } else {
        kitchenTotal = Math.round((kitchenTotal * kitchen) / 10) * 10;
    }
    $("#kitchenTotal").html("$" + kitchenTotal);

    //bathroom Logic
    var bathroom = $("#bathroom option:selected").val();
    var bathroomArr = [];
    var bathroomTrim = $('input[name="trim3"]:checked').val();
    var bathroomWall = $('input[name="wall3"]:checked').val();
    var bathroomCeiling = $('input[name="ceiling3"]:checked').val();

    if (bathroomTrim != null) {
        bathroomArr.push(100);
    }
    if (bathroomWall != null) {
        bathroomArr.push(150);
    }
    if (bathroomCeiling != null) {
        bathroomArr.push(100);
    }
    bathroomTotal = bathroomArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (bathroom == 0) {
        bathroomTotal = 0
    } else {
        bathroomTotal = Math.round((bathroomTotal * bathroom) / 10) * 10;
    }
    $("#bathroomTotal").html("$" + bathroomTotal);

    //bedroom Logic
    var bedroom = $("#bedroom option:selected").val();
    var bedroomArr = [];
    var bedroomTrim = $('input[name="trim4"]:checked').val();
    var bedroomWall = $('input[name="wall4"]:checked').val();
    var bedroomCeiling = $('input[name="ceiling4"]:checked').val();

    if (bedroomTrim != null) {
        bedroomArr.push(trim);
    }
    if (bedroomWall != null) {
        bedroomArr.push(walls);
    }
    if (bedroomCeiling != null) {
        bedroomArr.push(ceiling);
    }
    bedroomTotal = bedroomArr.reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0);
    if (bedroom == 0) {
        bedroomTotal = 0
    } else {
        bedroomTotal = Math.round((bedroomTotal * bedroom) / 10) * 10;
    }
    $("#bedroomTotal").html("$" + bedroomTotal);

    //Total
    total = livingTotal + diningTotal + bedroomTotal + bathroomTotal + officeTotal + hallwaysTotal + stairwayTotal + foyerTotal + lobbyTotal + familyTotal + kitchenTotal + railingsTotal + bathroomRenovation;

    $("#total").html("Total: $" + total);

});



