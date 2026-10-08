type NoticeCardProps = {
  title: string;
  message: string;
};

function NoticeCard({ title, message }: NoticeCardProps) {
  return (
    <div className="notice-card">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default NoticeCard;