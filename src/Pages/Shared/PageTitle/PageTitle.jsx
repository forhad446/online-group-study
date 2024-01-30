
const PageTitle = ({title}) => {
    return (
        <div>
            <div className="divider"></div>
            <h2 className="text-3xl text-center font-bold">
                {title}
            </h2>
            <div className="divider"></div>
        </div>
    );
};

export default PageTitle;