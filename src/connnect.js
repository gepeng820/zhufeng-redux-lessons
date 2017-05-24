import React from 'react';
export function connect(mapStateToProps, mapDispatchToState) {
    return (component) => {
        class Proxy extends React.Component {
            constructor() {
                super();
                this.state = mapStateToProps(this.context.store.getState());
            }

            componentWillMount() {
                this.unsubscribe = this.context.store.subscribe(() => {
                    this.setState({...mapStateToProps(this.context.store.getState())});
                })
            }

            componentWillUnMount() {
                this.unsubscribe();
            }

            return() {
                return
                <component {...this.state} {...mapDispatchToState(this.context.store.dispatch)}></component>
            }
        }
        return Proxy;
    }
}