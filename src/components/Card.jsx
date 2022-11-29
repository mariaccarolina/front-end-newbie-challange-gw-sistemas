import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

function Card(list) {
  const { id, avatar, first_name, email } = list;
  return (
    <List key={id}>
      <ListItem style={{ cursor: 'pointer' }}>
        <ListItemAvatar>
          <Avatar>
            <img
              width={50}
              src={avatar}
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={first_name}
          secondary={email}
        />
      </ListItem>
      <Divider />
    </List>
  );
}

export default Card;
