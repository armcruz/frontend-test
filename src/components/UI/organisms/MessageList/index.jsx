import PropTypes from 'prop-types';
import styles from './MessageList.module.css';
import Message from 'components/UI/molecules/Message';
import { IMessage } from 'models/Message';

function MessageList({ isBotWriting, messages }) {
	return (
		<ul className={styles.list}>
			{messages.map((msg, i) => (
				<Message {...msg} key={i} />
			))}
			{isBotWriting && <li>Writing</li>}
		</ul>
	);
}

MessageList.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.shape(IMessage)).isRequired,
	isBotWriting: PropTypes.bool,
};

export default MessageList;
