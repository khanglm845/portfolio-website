interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-bg-card text-text-secondary border border-border-subtle hover:border-accent-magenta/30 hover:text-text-primary",
    accent:
      "bg-accent-magenta/10 text-accent-magenta border border-accent-magenta/20",
    outline:
      "bg-transparent text-text-secondary border border-border-subtle hover:bg-bg-card",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
