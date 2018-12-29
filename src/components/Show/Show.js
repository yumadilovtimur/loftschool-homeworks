// уже есть компонент App, но нужно написать компонент Show, который при получении id конкретного шоу должен выполнить сетевой запрос, получить данные из сети и отразить их в своей верстке. Данный компонент нужно реализовать используя только 2 поля в state — showId и data, а также используя только 2 метода из жизненного цикла — componentDidUpdate и getDerivedStateFromProps. Успехов!

import React from 'react';
import getShowInfo from '../../api';

class Show extends React.Component {
  state = {
    showId: '',
    data: {}
  };

  componentDidUpdate(prevProps) {
    const { showId } = this.props;

    if (showId !== prevProps.showId) {
      getShowInfo(showId).then(response => {
        this.setState({
          data: response
        });
      });
      this.setState({
        showId
      });
    }
  }

  render() {
    const { showId, data } = this.state;

    if (showId !== '') {
      return (
        <div className="show">
          <div className="t-show-name">Название: {data.name}</div>
          <div className="t-show-genre">Жанр: {data.genres}</div>
          <div className="t-show-runtime">
            Продолжительность серии: {data.runtime}
          </div>
          <div className="t-show-summary">Описание: {data.summary}</div>
        </div>
      );
    } else {
      return <div className="t-show-info">Шоу не выбрано</div>;
    }
  }
}

export default Show;
