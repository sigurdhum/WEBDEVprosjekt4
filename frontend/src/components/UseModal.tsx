import { useState } from 'react';


//function to use the modal
export const useModal = () => {
	const [isShown, setIsShown] = useState<boolean>(false);
	const toggle = () => setIsShown(!isShown);
	return {
		isShown,
		toggle,
	};
};