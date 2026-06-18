$(document).ready(function() {
    $('.file-upload-input').on('change', function() {
        const $input = $(this);
        const $field = $input.closest('.file-upload-field');
        const $text = $field.find('.file-upload-text');

        if (this.files && this.files.length > 0) {
            $text.text(this.files[0].name);
            $text.addClass('file-selected');
        } else {
            $text.text('Выберите файл');
            $text.removeClass('file-selected');
        }
    });
});