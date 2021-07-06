import {cloneElement, useEffect} from 'react';

function ClosablePopup(props) {
    const {children, ...rest} = props;

    useEffect(() => {
        function closeModalWithEsc(e) {
            if (e.key === "Escape") {
                children.props.onClose();
            }
        };

        function closeModalWithClick(e) {
            if (e.target.classList.contains('modal')) {
                children.props.onClose();
            }
        };

        document.addEventListener('mousedown', closeModalWithClick);
        document.addEventListener('keydown', closeModalWithEsc);

        return () => {
            document.removeEventListener('mousedown', closeModalWithClick);
            document.removeEventListener('keydown', closeModalWithEsc);
        };
    }, [children]);

    return (
        <>
            {cloneElement(children, {...rest})}
        </>
    );
}

export default ClosablePopup;