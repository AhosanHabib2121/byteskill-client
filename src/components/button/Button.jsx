import PropTypes from 'prop-types';

const Button = ({label, icon:Icon}) => {
    return (
        <button
            className={`
          relative
          rounded-lg
          transition
          px-4
          py-3
          bg-[#9333EA]
          hover:bg-[#7b25cb]
        `}
        >
            {Icon && (
                <Icon
                    size={24}
                    className='
              absolute
              left-4
              top-3
            '
                />
            )}
            {label}
        </button>
    );
};
Button.propTypes = {
    label: PropTypes.node,
    icon: PropTypes.node,
}

export default Button;