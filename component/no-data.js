import Config from '../config';
import Lan from '../modules/language';

export default ()=><div className="d-flex flex-column justify-content-center align-items-center no-data">
    <img className="no-data-image" src={Config.PATH.STATIC + '/images/no-data.png'}/>
    <div className="no-data-title">{Lan.t('empty_list')}</div>
</div>