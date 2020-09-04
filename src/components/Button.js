import React from 'react';
import '../styles/Button.scss';

export default function Button(props) {

	const {
		children,
		disabled,
		variant,
		disableShadow,
		startIcon,
		endIcon,
		size,
		color
	} = props;

	const classes = [];
	if(disabled) classes.push('disabled');
	if(variant) classes.push(variant);
	if(disableShadow) classes.push('disableShadow');
	if(size) classes.push(size);
	if(color) classes.push(`color-${color}`)

	return (
		<button className={`jabo-button ${classes.join(' ')}`}>
			{startIcon && <span className='material-icons-round start_icon'>{startIcon}</span>}
			{children}
			{endIcon && <span className='material-icons-round end_icon'>{endIcon}</span>}
		</button>
	)
}