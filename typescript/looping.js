var looping = function (i) {
    for (var i_1 = 0; i_1 < 5; i_1++) {
        console.log("`*`".repeat(i_1));
    }
    console.log("----------------------------------");
    for (var i_2 = 0; i_2 < 5; i_2++) {
        console.log("`*`".repeat(5 - i_2));
    }
};
looping("*");
