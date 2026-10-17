# Pakari · Landing page

Landing page de ejemplo para vender barras de chocolate Pakari, con un estilo inspirado en apple.com. Está pensada primero para el celular.

## Cómo verla

No necesita instalar nada. Abre `index.html` en el navegador, o levanta un servidor local:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## Qué incluye

- **Navegación translúcida** con efecto de desenfoque (blur), como en apple.com, y menú hamburguesa en el celular.
- **Hero** con un titular grande y una barra de chocolate flotando (dibujada en SVG, así que no hacen falta imágenes).
- **Sección oscura "Origen"** con contadores animados.
- **Sabores**: carrusel que se desliza con el dedo en el celular y cuadrícula en escritorio.
- **Detalles** en tarjetas tipo "bento".
- **Caja de degustación** con botón de compra.
- **Barra de compra fija** abajo de la pantalla, solo en el celular.
- Animaciones de aparición al hacer scroll. Se desactivan si el usuario tiene activada la opción de reducir movimiento.
- Carrito de ejemplo con contador y aviso emergente.

## Archivos

| Archivo | Contenido |
|---|---|
| `index.html` | Estructura y contenido |
| `styles.css` | Estilos: primero para el celular, con ajustes para escritorio a partir de 734px |
| `script.js` | Menú, animaciones, barra fija y carrito |

## Repositorios de referencia (estilo Apple)

- [HashimHB/AppleWebsite-Clone](https://github.com/HashimHB/AppleWebsite-Clone): HTML, CSS y JS con GSAP y Swiper.
- [oomeravcii/Apple-Landing-Page-iPhone-15](https://github.com/oomeravcii/Apple-Landing-Page-iPhone-15): landing en HTML y CSS con una hoja de estilos aparte para el celular.
- [Abongile-web/apple_ui_clone](https://github.com/Abongile-web/apple_ui_clone): HTML, SCSS y JS, responsive y con menú hamburguesa.
- [krishna-singha/Apple-Clone](https://github.com/krishna-singha/Apple-Clone)
- `sanidhyy/apple-clone`: versión avanzada con Three.js y GSAP, al estilo de la página del iPhone 15.

## Próximos pasos

- Reemplazar las barras SVG por fotos reales del producto (en formato `.webp`).
- Poner los precios reales (los de ahora son de ejemplo).
- Conectar el botón "Comprar" a una pasarela de pago, como Shopify Buy Button, Stripe Payment Links o PayPal.
