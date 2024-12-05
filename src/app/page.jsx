import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, LogOut, Package, Search, ShoppingCart, Sparkles, User } from 'lucide-react'
import Image from "next/image"

export default function DashboardPage() {
  return (
    (<div className="flex h-screen bg-mint-50">
      {/* Sidebar */}
      <aside className="w-64 p-6 border-r">
        <div className="flex items-center gap-2 mb-8">
          <h1 className="text-xl font-semibold">BuyMore</h1>
        </div>

        <nav className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Popular Products
            </div>
            <Button variant="default" className="w-full justify-start" size="lg">
              <Package className="w-4 h-4 mr-2" />
              Explore New
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="lg">
              <Package className="w-4 h-4 mr-2" />
              Clothing and Shoes
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="lg">
              <Package className="w-4 h-4 mr-2" />
              Gifts and Living
            </Button>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-medium text-muted-foreground">Quick actions</h2>
            <Button variant="outline" className="w-full justify-start">
              Request for product
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Add member
            </Button>
          </div>

          <div className="pt-6 border-t">
            <Button variant="ghost" className="w-full justify-start">
              <LogOut className="w-4 h-4 mr-2" />
              Log out
            </Button>
          </div>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <header className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-semibold">37</span>
                <div className="text-sm text-muted-foreground">
                  Orders
                  <br />
                  Last 7 days
                </div>
              </div>
              <Tabs defaultValue="dashboard">
                <TabsList>
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="website">Website</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Ryana</span>
              </div>
            </div>
          </header>

          {/* Explore Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Explore</h2>
              <div className="flex items-center gap-4">
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="men">Men</TabsTrigger>
                    <TabsTrigger value="women">Women</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button variant="outline" size="icon">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Promotional Banners */}
            <div className="grid gap-6 mb-6">
              <Card className="bg-emerald-50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">GET UP TO 50% OFF</h3>
                      <Button>Get Discount</Button>
                    </div>
                    <Image
                      src="/placeholder.svg"
                      alt="Promotional banner"
                      width={200}
                      height={200}
                      className="rounded-lg" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Winter's weekend</h3>
                      <p className="text-muted-foreground">keep it casual</p>
                    </div>
                    <Image
                      src="/placeholder.svg"
                      alt="Winter collection"
                      width={200}
                      height={200}
                      className="rounded-lg" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg"
                      alt="WMX Rubber Zebra sandal"
                      width={400}
                      height={400}
                      className="rounded-lg" />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white rounded-full">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Our Picks</p>
                      <h4 className="font-medium">WMX Rubber Zebra sandal</h4>
                    </div>
                    <Badge variant="secondary" className="text-primary">
                      $36
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <Image
                      src="/placeholder.svg"
                      alt="Supper Skiny jogger"
                      width={400}
                      height={400}
                      className="rounded-lg" />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white rounded-full">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Your Choice</p>
                      <h4 className="font-medium">Supper Skiny jogger in brown</h4>
                    </div>
                    <Badge variant="secondary" className="text-primary">
                      $89
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>)
  );
}

