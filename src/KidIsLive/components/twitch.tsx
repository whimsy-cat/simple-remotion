import {ComponentProps, FC} from 'react';

type Props = ComponentProps<'svg'>;

export const TwitchLogo: FC<Props> = (props) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
			<path
				d="M2.149 0L.537 4.119v16.836h5.731V24h3.224l3.045-3.045h4.657l6.269-6.269V0H2.149zm19.164 13.612l-3.582 3.582H12l-3.045 3.045v-3.045H4.119V2.149h17.194v11.463zm-3.582-7.343v6.262h-2.149V6.269h2.149zm-5.731 0v6.262H9.851V6.269H12z"
				fillRule="evenodd"
				clipRule="evenodd"
				fill="#fff"
			/>
		</svg>
	);
};
