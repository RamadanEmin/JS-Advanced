function encodeAndDecodeMessages() {
    const encode = document.querySelector('main>div:first-child');
    const decode = document.querySelector('main>div:last-child');
    const encodeTextarea = encode.querySelector('textarea');
    const decodeTextarea = decode.querySelector('textarea');
    let decodedMessage = '';
    encode.querySelector('button').addEventListener('click', onEncode);
    decode.querySelector('button').addEventListener('click', onDecode);
    function onEncode() {
        decodedMessage = encodeTextarea.value;
        let encodedMessage = '';
        for (const char of decodedMessage) {
            encodedMessage += String.fromCharCode(char.charCodeAt() + 1);
        }
        decodeTextarea.value = encodedMessage;
        encodeTextarea.value = '';
    }
    function onDecode() {
        decodeTextarea.value = decodedMessage;
    }
}