const Footer = () => {
    return (
        <footer>
            {/* <section className="wrapper">
                {process.env.REACT_APP_EMAIL.replace(/["]/g, '')}
                {process.env.REACT_APP_PHONE}
            </section> */}
            <section className="wrapper">
                {process.env.REACT_APP_LOGO_NAME} Copyright © 2023 {process.env.REACT_APP_LOGO_NAME.toLocaleLowerCase()} - All rights reserved || Designed By: Danil
            </section>
        </footer>
    )
}
export default Footer