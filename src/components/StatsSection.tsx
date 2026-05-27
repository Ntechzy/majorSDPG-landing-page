import CountUp from "react-countup";
import { Building2, Bed, Users, Award } from "lucide-react";

const stats = [
  {
    value: 14,
    suffix: "+",
    label: "Departments",
    icon: Building2,
  },
  {
    value: 150,
    suffix: "+",
    label: "Hospital Beds",
    icon: Bed,
  },
  {
    value: 2500,
    suffix: "+",
    label: "Alumni Doctors",
    icon: Users,
  },
  {
    value: 0,
    suffix: "A+",
    label: "Grade Facility",
    icon: Award,
    isText: true,
  },
];

const StatsSection = () => {
  return (
    <section className="bg-cream py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-sky-500 uppercase tracking-[4px] text-sm font-semibold mb-4">
            Campus Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#15192d] leading-tight">
            Excellence in <span className="text-orange-500">Numbers</span>
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
            Building future healthcare leaders through quality education,
            modern infrastructure, and clinical excellence.
          </p>

          <div className="flex justify-center items-center gap-3 mt-6">
            <div className="w-16 h-0.5 bg-orange-300"></div>
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="w-16 h-0.5 bg-orange-300"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-orange-50 hover:-translate-y-3"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  <Icon size={30} />
                </div>

                {/* Number */}
                <h3 className="text-4xl md:text-5xl font-bold text-[#15192d] mb-3">
                  {stat.isText ? (
                    stat.suffix
                  ) : (
                    <CountUp
                      end={stat.value}
                      duration={3}
                      suffix={stat.suffix}
                    />
                  )}
                </h3>

                {/* Label */}
                <p className="text-gray-600 text-lg font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;