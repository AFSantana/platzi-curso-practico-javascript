const cupones = [
    "S117MC",
    "B312N6",
    "A239N4",
    "A259N1",
    "M343GS",
];

function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function calcularPrecioConDescuentoCupon(precio)
{
    const cupon = document.getElementById("InputVoucher");
    const cuponValue = cupon.value;
    let descuentoCupon;

    switch(cuponValue)
    {
        case cupones[0]:
            descuentoCupon = 25;
        break;
        case cupones[1]:
            descuentoCupon = 20;
        break;
        case cupones[2]:
            descuentoCupon = 15;
        break;
        case cupones[3]:
            descuentoCupon = 10;
        break;
        case cupones[4]:
            descuentoCupon = 5;
        break;
    }

    const porcentajePrecioConCupon = 100 - descuentoCupon;
    const precioConDescuentoYCupon = (precio * porcentajePrecioConCupon) / 100;
    return precioConDescuentoYCupon;
}

function onClickButtonPriceDiscount()
{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const total = calcularPrecioConDescuentoCupon(precioConDescuento);
    
    const resultP = document.getElementById("ResultP");

    if(total>=0)
    {
        resultP.innerText = "El precio a pagar es: $" + total + " (Con cupón).";;
    }
    else
    {
        resultP.innerText = "El precio a pagar es: $" + precioConDescuento + " (Sin cupón).";
    }
    
    
}