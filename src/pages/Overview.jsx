import StatCard from "../components/cards/StatCard";
import ChartPlaceholder from "../components/charts/ChartPlaceholder";
import CodeIcon from "@mui/icons-material/Code";
import TimelineIcon from "@mui/icons-material/Timeline";

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Projects" value="12" icon={CodeIcon} />
        <StatCard title="Commits" value="248" icon={TimelineIcon} />
        <StatCard title="Blog Posts" value="8" />
        <StatCard title="Clients" value="5" />
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-3">
        <ChartPlaceholder title="Commits per Month" className="lg:col-span-2" />
        <ChartPlaceholder title="Tech Usage" />
      </div>
    </div>
  );
}
