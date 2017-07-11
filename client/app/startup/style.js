import 'typeface-open-sans';
import 'typeface-assistant';
import '../css/site.scss';
import 'font-awesome/scss/font-awesome.scss';

document.body.classList.add('bg-blue-to-purple', 'open-sans');
if (!('ontouchstart' in document.documentElement)) {
	document.documentElement.classList.add('no-touch');
}