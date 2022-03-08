//tentei utilizar com erros relacionados às requisições http, mas sempre que o erro ocorria,
//o estado mudava, logo os componentes filhos eram reavaliados, e o useEffect rodava novamente,
//assim jogando mais um erro e causando um loop infinito.

//decidi lidar com o erro usando um estado no redux mesmo.

import { Component } from "react";
import Modal from "./Modal";
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  handleOk() {
    this.setState({ hasError: false });
  }

  render() {
    return (
      <>
        {this.state.hasError && (
          <Modal h2="Erro." p="Ocorreu um erro com alguma requisição." onClick={this.handleOk.bind(this)} />
        )}
        {this.props.children}
      </>
    );
  }
}

export default ErrorBoundary;
