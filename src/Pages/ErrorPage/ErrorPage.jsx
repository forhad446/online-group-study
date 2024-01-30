import error from './../../assets/Error.gif'

const ErrorPage = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;