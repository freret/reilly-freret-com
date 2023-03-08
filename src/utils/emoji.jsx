export default function Emoji({description, withCharacter}) {
  return (
    <span role="img" aria-label={description}>{withCharacter}</span>
  );
}