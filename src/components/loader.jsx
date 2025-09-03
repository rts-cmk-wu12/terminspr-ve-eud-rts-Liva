import { BarLoader } from "react-spinners";

const override = {
    alignSelf: 'center',
    marginInline: 'auto'
};

function Loader() {
    return (
        <BarLoader
            color="#EAEAEA"
            loading={true}
            cssOverride={override}
            size={55}
            className="loader"
        />
    );
}

export default Loader;