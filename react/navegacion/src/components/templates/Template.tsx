import Header from "./Header";


type Props = {
    children: JSX.Element;
};


const routes = [
    {
        href: '/',
        text: 'Home'
    },
    {
        href: '/about',
        text: 'About'
    },
    {
        href: '/contact',
        text: 'Contact'
    }

]
;

function Template({ children }: Props) {
    return (
       <div>
        <Header title="template" links={routes} />
        {children}
        <footer>
            
            &copy; { new Date().getFullYear() }
        </footer>

       </div>
    );
}


export default Template;
