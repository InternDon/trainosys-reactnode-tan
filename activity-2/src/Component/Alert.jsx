import Icon from "./Icon";

const Alert = (props) => {
    const resolveColorFromType = (type) => {
        switch (type) {
            case 'success':
                return 'green';
            case 'warning':
                return 'orange';
            case 'error':
                return 'red';
            default:
                return 'blue';
        }
    };

    return (
        <div className="alert" style={{ backgroundColor: resolveColorFromType(props.type) }}>
            <h3>
                <Icon type={props.type} />
                {props.title}
            </h3>
            {props.message && <p>{props.message}</p>}
        </div>
    );
};

export default Alert;