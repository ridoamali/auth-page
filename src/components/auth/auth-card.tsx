import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  footer?: React.ReactNode;
}

export function AuthCard({ children, title, footer }: AuthCardProps) {
  return (
    <Card className="w-[500px] rounded-xl border shadow-2xl bg-gradient-to-b from-sky-600/20 to-green-300/90 backdrop-filter">
      <CardHeader>
        <div className="w-full flex flex-col justify-center items-center gap-y-4">
          <h1 className="text-3xl font-semibold">Auth</h1>
          <p>{title}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {children}
      </CardContent>
      {footer && (
        <div className="flex items-center p-6 pt-0">
          {footer}
        </div>
      )}
    </Card>
  );
}
