function formatarCPF (campo) {
    var tam = campo.value.length;
    if ( tam == 3 ) {
        campo.value = campo.value + ".";
    }else if ( tam == 7 ) {
            campo.value = campo.value + ".";
    }else if ( tam == 11 ) {
        campo.value = campo.value + "-";
    }
}