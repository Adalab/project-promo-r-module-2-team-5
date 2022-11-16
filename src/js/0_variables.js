'use strict';

const titleHeader = document.querySelectorAll('.js_fieldset_boxOne');
const arrow = document.querySelectorAll('.js_arrow');
const content = document.querySelectorAll('.js_boxTwo');

const previewName = document.querySelector('.js_preview_name');
const previewBorder = document.querySelector('.js_preview_box1');
const previewIcons = document.querySelectorAll('.js_card_icon');
const previewIconsBorder = document.querySelectorAll('.js_media_item');
const radioInputs = document.querySelectorAll('.js_input_palette');
const form = document.querySelector('.js_form');

const previewJob = document.querySelector('.js_preview_job');
const previewImage = document.querySelector('.js_preview_picture');
const previewLinks = document.querySelectorAll('.js_preview_link');
const defaultName = 'Nombre Apellido';
const defaultJob = 'Front-end developer';

const cardResetBtn = document.querySelector('.js_card_reset_btn');

const fr = new FileReader();
const fileField = document.querySelector('.js_image_upload_btn');
const profileImage = document.querySelector('.js_preview_picture');
const profilePreview = document.querySelector('.js_mini_image');

const shareBtn = document.querySelector('.js_share_btn');
const shareCard = document.querySelector('.js_share_section');
