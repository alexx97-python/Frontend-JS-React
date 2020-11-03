function _createModal(options) {
    const modal = document.createElement("div");
    modal.classList.add('words-choose-modal');
    modal.insertAdjacentHTML('afterbegin',`
            <form class="modal-overlay">
                <div class="modal-window">
                    <div class="modal-header">
                        English Word
                        <span class="modal-close">&times;</span>
                    </div>
                    <div class="modal-body">
                    <input class="input-radio" type="radio" id="radio-input-1">
                    <label class="label-radio" for="radio-input-1">radio-input-1</label><br>
                    <input class="input-radio" type="radio" id="radio-input-2">
                    <label class="label-radio" for="radio-input-2">radio-input-2</label><br>
                    <input class="input-radio" type="radio" id="radio-input-3">
                    <label class="label-radio" for="radio-input-3">radio-input-3</label><br>
                    <input class="input-radio" type="radio" id="radio-input-4">
                    <label class="label-radio" for="radio-input-4">radio-input-4</label><br>
                    </div>

                    <div class="modal-footer">
                        <button type="submit"> Submit </button>
                    </div>
                </div>
            </form>
    `);
    document.body.appendChild(modal);
    return modal;
}


$.modal = function (options) {
    const $modal = _createModal(options);
    const ANIMATION_SPEED = 200;
    let closing = false;

    return {
        open (){
            !closing && $modal.classList.add('open');
        },
        close () {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hide');

            setTimeout(() => {
                $modal.classList.remove('hide');
                closing = false;
            }, ANIMATION_SPEED)

        },
        destroy () {

        }
    }
}