import Header from '~/components/layout/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="Content">{children}</div>
        </div>
    );
}

export default HeaderOnly;
