import PropTypes from 'prop-types';

const Button = ({ label, onClick, icon, round, outline}) => {
    return (
        <button
            onClick={onClick}
            className={`
          relative
          transition
          px-4
          py-3
          text-white
          hover:bg-[#7b25cb]
          ${round ? `${round}` :'rounded-lg'}
          ${outline ? 'bg-[#1C1E2A]' : 'bg-[#9333EA]'}
          ${outline ? 'outline-[#9333EA] outline' : ''}
          
        `}
        >
            <div className='flex items-center justify-center gap-2'>
                {label}
                {icon}
            </div>
            
            
        </button>
    );
};
Button.propTypes = {
    label: PropTypes.node,
    icon: PropTypes.node,
    round: PropTypes.node,
    outline: PropTypes.node,
}

export default Button;