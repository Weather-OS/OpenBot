function Log(Locales, Type, Filename, Message){
    switch (Type){
        case "std_success_msg":     console.log(`${Locales.Colors.FgWhite}[${Locales.Colors.FgGreen}${Filename}${Locales.Colors.FgWhite}] ${Locales.Colors.FgGreen}${Message}${Locales.Colors.FgWhite}`); break;
        case "std_information_msg": console.log(`${Locales.Colors.FgWhite}[${Locales.Colors.FgBlue}${Filename}${Locales.Colors.FgWhite}] ${Locales.Colors.FgWhite}${Message}${Locales.Colors.FgWhite}`); break;
        case "std_normalize_msg":   console.log(`${Locales.Colors.FgWhite}[${Locales.Colors.FgWhite}${Filename}${Locales.Colors.FgWhite}] ${Locales.Colors.FgWhite}${Message}${Locales.Colors.FgWhite}`); break;
        case "std_commence_msg":    console.log(`${Locales.Colors.FgWhite}[${Locales.Colors.FgBlue}${Filename}${Locales.Colors.FgWhite}] ${Locales.Colors.FgGreen}${Message}${Locales.Colors.FgWhite}`); break;
        case "std_warning_msg":     console.log(`${Locales.Colors.FgWhite}[${Locales.Colors.FgYellow}${Filename}${Locales.Colors.FgWhite}] ${Locales.Colors.FgYellow}${Message}${Locales.Colors.FgWhite}`); break;
        case "std_error_msg":       console.log(`${Locales.Colors.FgWhite}[${Locales.Colors.FgRed}${Filename}${Locales.Colors.FgWhite}] ${Locales.Colors.FgRed}${Message}${Locales.Colors.FgWhite}`); break;
    } 
}

module.exports = { Log };